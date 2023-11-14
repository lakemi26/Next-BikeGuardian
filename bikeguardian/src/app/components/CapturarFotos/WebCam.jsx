'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './WebCam.css';

const WebcamCapture = ({ placeholderImage }) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (cameraActive) {
      const initializeWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      };

      initializeWebcam();
    }
  }, [cameraActive]);

  const capturePhoto = async () => {
    setCameraActive(false);

    const canvas = canvasRef.current;
    canvas.height = videoRef.current.videoHeight;
    canvas.width = videoRef.current.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0);

    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
    setCapturedImage(blob);
  };

  const retakePhoto = () => {
    setCameraActive(true);
    setCapturedImage(null);
  };

  const uploadPhoto = async () => {
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', capturedImage);

      const response = await fetch('http:http://localhost:8080/bicicletas', {
        method: 'POST',
        body: formData,
      });

      // Lógica?

      console.log('Foto enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar imagem para o servidor:', error);
    }

    setIsUploading(false);
  };

  return (
    <div className={styles.previewContainer}>
      <div className={styles.cameraContainer}>
        {cameraActive && <video ref={videoRef} autoPlay className={styles.video}></video>}
        {!cameraActive && capturedImage && (
          <div className={styles.overlay}>
            <img src={URL.createObjectURL(capturedImage)} alt="Captured" className={styles.capturedImage} />
          </div>
        )}
      </div>

      {!cameraActive && !capturedImage && (
        <img
          src={placeholderImage}
          alt="Placeholder"
          className={styles.placeholderImage}
        />
      )}

      <button onClick={cameraActive ? capturePhoto : retakePhoto} className={styles.button}>
        {cameraActive ? 'Tirar foto' : 'Tirar outra'}
      </button>

      {!cameraActive && capturedImage && (
        <button
          onClick={uploadPhoto}
          className={`${styles.button} ${styles.uploadButton}`}
          disabled={isUploading}
        >
          {isUploading ? 'Enviando...' : 'Enviar para o Banco de Dados'}
        </button>
      )}

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default WebcamCapture;