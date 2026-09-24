import subprocess

video = "video_22.mp4"

input_path = r"C:\xampp\htdocs\Projetos\Entre\Familia\{video}".format(video=video)
output_path = r"C:\xampp\htdocs\Projetos\Entre\Familia\videos\{video}".format(video=video)


def comprimir_video(input_path, output_path):

    comando = [
        "ffmpeg",

        "-i", input_path,

        # Vídeo H.264
        "-c:v", "libx264",

        # Qualidade
        "-crf", "27",

        # Velocidade de compressão
        "-preset", "medium",

        # Compatibilidade com celulares/navegadores
        "-profile:v", "main",
        "-level", "4.0",

        # Pixel format compatível
        "-pix_fmt", "yuv420p",

        # Permite iniciar o vídeo antes de baixar tudo
        "-movflags", "+faststart",

        # Áudio AAC
        "-c:a", "aac",
        "-b:a", "96k",

        # Frequência de áudio
        "-ar", "48000",

        output_path,
    ]

    print(f"Iniciando a compressão de: {input_path}")

    try:

        subprocess.run(comando, check=True)

        print(
            f"Vídeo compactado com sucesso:\n{output_path}"
        )

    except subprocess.CalledProcessError as e:

        print(
            f"Erro durante a compressão: {e}"
        )


comprimir_video(input_path, output_path)