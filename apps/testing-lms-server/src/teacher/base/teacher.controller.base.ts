/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TeacherService } from "../teacher.service";
import { TeacherCreateInput } from "./TeacherCreateInput";
import { Teacher } from "./Teacher";
import { TeacherFindManyArgs } from "./TeacherFindManyArgs";
import { TeacherWhereUniqueInput } from "./TeacherWhereUniqueInput";
import { TeacherUpdateInput } from "./TeacherUpdateInput";

export class TeacherControllerBase {
  constructor(protected readonly service: TeacherService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Teacher })
  async createTeacher(
    @common.Body() data: TeacherCreateInput
  ): Promise<Teacher> {
    return await this.service.createTeacher({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        specialization: true,
        yearsOfExperience: true,
        email: true,
        name: true,
        role: true,
        phone: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Teacher] })
  @ApiNestedQuery(TeacherFindManyArgs)
  async teachers(@common.Req() request: Request): Promise<Teacher[]> {
    const args = plainToClass(TeacherFindManyArgs, request.query);
    return this.service.teachers({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        specialization: true,
        yearsOfExperience: true,
        email: true,
        name: true,
        role: true,
        phone: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async teacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    const result = await this.service.teacher({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        specialization: true,
        yearsOfExperience: true,
        email: true,
        name: true,
        role: true,
        phone: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTeacher(
    @common.Param() params: TeacherWhereUniqueInput,
    @common.Body() data: TeacherUpdateInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.updateTeacher({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          specialization: true,
          yearsOfExperience: true,
          email: true,
          name: true,
          role: true,
          phone: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Teacher })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTeacher(
    @common.Param() params: TeacherWhereUniqueInput
  ): Promise<Teacher | null> {
    try {
      return await this.service.deleteTeacher({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          specialization: true,
          yearsOfExperience: true,
          email: true,
          name: true,
          role: true,
          phone: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
