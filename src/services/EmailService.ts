interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: IMailTo,
  message: IMailMessage
}

interface IMailService {
  sendMail(request: MessageDTO): void; 
}

class MailService implements IMailService {
  // sendMail(to: IMailTo, message: IMailMessage) {
  //   console.log(`Email enviado para ${to.name}: ${message.subject}`);
  // }

  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default MailService;