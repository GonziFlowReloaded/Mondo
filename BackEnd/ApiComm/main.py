from fastapi import FastAPI, HTTPException
from emails.classes.c_mail import EmailSchema
from emails.funcs.send_mail import enviar_correo
from discord_notif.bot.discord_bot import bot, send_message_to_general_channel
from discord_notif.discord_schemas.msj_schema import Message
import threading
import os
TOKEN = os.getenv('DISCORD_SECRET_TOKEN')
app = FastAPI()
general_channel_id = 'general'
# Iniciar el bot de Discord en un hilo aparte
bot_thread = threading.Thread(target=bot.run(TOKEN), args=())
bot_thread.start()



@app.get('/')
def index():
    return 'q onda mondonga'


@app.post('/email_sender')
def email_sender(Email: EmailSchema):
    
    print(Email)
    enviar_correo(Email.destinatarios, Email.sujeto, Email.mensaje)
    

    return {"mensaje": "Correo enviado exitosamente"}
