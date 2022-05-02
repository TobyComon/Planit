import { dbContext } from "../db/DbContext.js";
import { BadRequest } from '../utils/Errors.js'


class ProjectsService {
    async create(body) {
        const newProject = await dbContext.Projects.create(body)
      await newProject.populate("creator")
        return newProject
    }
    async getAll() {
        const found = await dbContext.Projects.findByProfile(id)
        if(!found){
            throw new BadRequest('Unable to find and projects')
        }
        return found
    }

async getProjectByProfile(id){
    
}
    
    async getProjectById(id){
        const project = await dbContext.Projects.findById(id)
        return project
    }
}

export const projectsService = new ProjectsService()