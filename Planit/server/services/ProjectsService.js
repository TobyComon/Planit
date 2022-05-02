import { dbContext } from "../db/DbContext.js";


class ProjectsService {

async getProjectByProfile(id){
    const found = await dbContext.Projects.findByProfile(id)
}
    
    async getProjectById(id){
        const project = await dbContext.Projects.findById(id)
        return project
    }
}