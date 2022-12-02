import { EP } from "../entity/EP"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"


export const getUsrEP = async (request: Request, response: Response) => {
    const users = await AppDataSource.getRepository(EP).find()
    return response.json(users)
};


export const getEP = async (request: Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(EP).findOneBy(id)
    return response.json(user)
};

export const saveEP = async (request: Request, response: Response) => {
    const user = await AppDataSource.getRepository(EP).save(request.body)
    return response.json(user)
}

export const updateEP = async (request: Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(EP).update(id, request.body)
    if (user.affected == 1) {
        const userUpdated = await AppDataSource.getRepository(EP).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({ message: 'User not found!' })
};

export const removeEP = async (request: Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(EP).delete(id)
    if (user.affected == 1) {
        const userUpdated = await AppDataSource.getRepository(EP).findOneBy(id)
        return response.json({ message: 'User file removed' })
    }
    return response.status(404).json({ message: 'User not found!' })
};
