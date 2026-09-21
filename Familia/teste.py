import subprocess

input_path = "C:\\xampp\\htdocs\\Projetos\\Entre\\Familia\\video_20.mp4"
output_path = "C:\\xampp\\htdocs\\Projetos\\Entre\\Familia\\videos\\video_20.mp4"

def comprimir_video(input_path, output_path):
  # Comando FFmpeg para compressão avançada com AV1 e Opus
  comando = [
      "ffmpeg",
      "-i",
      input_path,
      "-c:v",
      "libsvtav1",  # Codec de vídeo altamente eficiente
      "-crf",
      "30",  # Fator de qualidade (quanto maior, menor o arquivo. 28-34 é o ideal para AV1)
      "-preset",
      "4",  # Velocidade de encode (0 a 13; 4 é um ótimo equilíbrio)
      "-c:a",
      "libopus",  # Codec de áudio de alta compressão e qualidade
      "-b:a",
      "128k",  # Taxa de bits do áudio
      output_path,
  ]

  print(f"Iniciando a compressão de: {input_path}")
  try:
    subprocess.run(comando, check=True)
    print(f"Vídeo compactado com sucesso salvo em: {output_path}")
  except subprocess.CalledProcessError as e:
    print(f"Erro durante a compressão: {e}")

# Chamando a função com os caminhos que você definiu
comprimir_video(input_path, output_path)