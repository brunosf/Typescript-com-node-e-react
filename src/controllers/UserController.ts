import { Request, Response } from 'express'
import EmailService from "../services/EmailService";

const users = [
  { name: "Bruno Ferreira", email: "brunoferreira_@outlook.com" }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: "Bruno",
        email: "brunoferreira_@outlook.com" 
      },
      message: { 
        subject: "Seja bem-vindo ao sistema", 
        body: "Seja bem-vindo" 
      }
    });

    return res.send({ message: "Email enviado" });
  }
}