import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { ProjectService } from './project.service'
import { CreateProjectDTO } from './dto/create-project.dto'

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDTO: CreateProjectDTO) {
    return this.projectService.createProject(createProjectDTO)
  }

  @Get()
  findAll() {
    return this.projectService.getAllProjects()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.getProjectById(id)
  }
}
