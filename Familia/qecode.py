import qrcode

# 1. Defina a URL que você deseja transformar em QR Code
url = "https://amor-para-sempre.github.io/Entre/Familia/Ayane.html"

# 2. Gere o código QR
img = qrcode.make(url)

# 3. Salve o arquivo de imagem
img.save("qrcode_rapido.png")

print("QR Code gerado com sucesso como 'qrcode_rapido.png'!")
