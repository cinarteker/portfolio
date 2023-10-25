import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { IconButton, Popover, Box, Slider, Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

function Wave() {
  // renderer canvas mount
  const mountRef = useRef(null);

  // wave frequency control
  const [tick, setTick] = useState(0.001);
  const tickRef = useRef(tick);

  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  const handleFrequencyChange = (event, newValue) => {
    setTick(newValue);
  };

  // wave amplitude control
  const [amplitude, setAmplitude] = useState(3000);
  const amplitudeRef = useRef(amplitude);

  useEffect(() => {
    amplitudeRef.current = amplitude;
  }, [amplitude]);

  const handleAmplitudeChange = (event, newValue) => {
    setAmplitude(newValue);
  };

  // wave parameter slider
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  // wave calculation and rendering
  useEffect(() => {
    const planeDefinition = 100;
    const planeSize = 1245000;
    const background = "black";
    const meshColor = "grey";

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      400000,
    );

    camera.position.z = 10000;
    camera.position.y = 10000;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(background, 1, 400000);

    const planeGeo = new THREE.PlaneGeometry(
      planeSize,
      planeSize,
      planeDefinition,
      planeDefinition,
    );

    const plane = new THREE.Mesh(
      planeGeo,
      new THREE.MeshBasicMaterial({
        color: meshColor,
        wireframe: true,
      }),
    );
    plane.rotation.x += Math.PI * 0.5;

    scene.add(plane);

    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(background, 1);

    const rendererDom = renderer.domElement;
    rendererDom.style.position = "absolute";
    rendererDom.style.top = "0";
    rendererDom.style.zIndex = "1";
    rendererDom.style.width = "100%";
    rendererDom.style.height = "100%";

    let count = 0;
    function render() {
      requestAnimationFrame(render);

      const { x, y, z } = camera.position;
      const rotationSpeed = 0.0005;
      camera.position.x =
        x * Math.cos(rotationSpeed) + z * Math.sin(rotationSpeed);
      camera.position.z =
        z * Math.cos(rotationSpeed) - x * Math.sin(rotationSpeed);
      camera.position.y = y;
      camera.lookAt(new THREE.Vector3(0, 10000, 0));

      const positions = planeGeo.attributes.position.array;
      const length = positions.length / 3; // Each vertex has x, y, and z components

      for (let i = 0; i < length; i += 1) {
        const px = positions[i * 3];
        const py = positions[i * 3 + 1];
        const index = i * 3 + 2;
        positions[index] =
          Math.sin((px / 1000 + count) * 5) *
            Math.cos((py / 1000 + count) * 5) *
            amplitudeRef.current +
          Math.sin((px / 500 - count) * 5) *
            Math.cos((py / 500 - count) * 5) *
            amplitudeRef.current;
      }

      count += tickRef.current;
      planeGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    render();
    mountRef.current.innerHTML = "";
    mountRef.current.appendChild(renderer.domElement);
  }, []);

  return (
    <Box>
      <Box ref={mountRef} />

      <IconButton
        color="primary"
        aria-label="settings"
        onClick={handlePopoverOpen}
        sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "999",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <TuneIcon />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{
          ".MuiPaper-root": {
            background: "rgba(0, 0, 0, 0.8)",
            padding: "10px",
          },
        }}
      >
        {/* Frequency Slider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
            mb: 1,
          }}
        >
          <Typography variant="body2" sx={{ mr: 1 }}>
            Frequency
          </Typography>
          <Slider
            size="small"
            min={0}
            max={0.01}
            step={0.0001}
            value={tick}
            onChange={handleFrequencyChange}
            sx={{ color: "grey", width: 200 }}
          />
        </Box>

        {/* Amplitude Slider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography variant="body2" sx={{ mr: 1 }}>
            Amplitude
          </Typography>
          <Slider
            size="small"
            min={0}
            max={10000}
            step={100}
            value={amplitude}
            onChange={handleAmplitudeChange}
            sx={{ color: "grey", width: 200 }}
          />
        </Box>
      </Popover>
    </Box>
  );
}

export default Wave;
