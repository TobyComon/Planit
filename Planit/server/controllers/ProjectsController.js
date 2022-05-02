import { Auth0Provider } from '@bcwdev/auth0provider'
import { projectsService } from '../services/ProjectsService.js'
import BaseController from '../utils/BaseController.js'

export class ProjectsController extends BaseController {
constructor(){
    super('api/projects')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .get('', this.getAll)
    .get('/:id', this.getById)
    .post('', this.create)
    .put('/:id', this.edit)
    .delete('/:id', this.remove)
}
    async getAll(req, res, next) {
        try {
            const projects = await projectsService.getAll()
            res.send(projects)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const newProject = await projectsService.create(req.body)
            res.send(newProject)
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
       try {
            throw new Error('Method not implemented.')
       } catch (error) {
           next(error)
       }
    }
    async remove(req, res, next) {
        try {
            throw new Error('Method not implemented.')
        } catch (error) {
            next(error)
        }
    }
}