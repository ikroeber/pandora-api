import { Injectable } from '@nestjs/common'
import { ProjectDTO } from './dto/project.dto'
import { CreateProjectDTO } from './dto/create-project.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProjectService {
  constructor(private prismaService: PrismaService) {}

  createProject(createProjectDTO: CreateProjectDTO) {
    const project = this.prismaService.project.create({
      data: createProjectDTO,
    })
    return project
  }

  getAllProjects() {
    const projects = this.prismaService.project.findMany()
    return projects
  }

  getProjectById(id: string): Promise<ProjectDTO> {
    const project = this.prismaService.project.findFirst({ where: { id } })
    return project
  }
}
