# aulas-front-fesp2026
# 🚀 Guia rápido: GitHub no laboratório da FESP
Objetivo: trabalhar em qualquer computador do laboratório da faculdade e enviar alterações para o GitHub.

---

# 1️⃣ Abrir o terminal no VS Code

No **VS Code**, abrir o terminal o terminal:

---

# 2️⃣ Verificar se o Git já está instalado

Digite no terminal:

```bash```
git --version

Se aparecer algo como:
git version 2.xx.x

✅ O Git já está instalado
➡️ Pode ir direto para o Passo 4

---

Se aparecer erro como:
git não é reconhecido como comando

❌ O Git não está instalado.

# 3️⃣ Instalar o Git

Acesse o site oficial:

https://git-scm.com/download/win

Baixe o Git para Windows

Execute o instalador.

Durante a instalação pode deixar todas as opções padrão:

Next
Next
Next
Install

Depois de instalar:

Feche o VS Code e abra novamente.

# 4️⃣ Configurar o usuário do Git (uma vez por computador)

Digite no terminal:

git config --global user.name "Seu Nome"

Depois:

git config --global user.email "seuemail@email.com"

Para conferir:

git config --list
# 5️⃣ Clonar o repositório

Vá até a pasta onde quer salvar o projeto. Exemplo:

cd Desktop

Agora clone o repositório:

git clone https://github.com/seu-usuario/aulas-front-fesp2026.git
# 6️⃣ Entrar na pasta do projeto
cd aulas-front-fesp2026
# 7️⃣ Fluxo de trabalho em toda aula
Antes de começar a aula

Sempre rode:

git pull

Isso baixa a versão mais atual do GitHub.

Depois de fazer alterações
# 1️⃣ Preparar arquivos
git add .
# 2️⃣ Salvar alteração
git commit -m "descrição da alteração"
# 3️⃣ Enviar para o GitHub
git push

# 📌 Fluxo resumido para toda aula
git pull
(trabalhar nos arquivos)

git add .
git commit -m "descrição"
git push
