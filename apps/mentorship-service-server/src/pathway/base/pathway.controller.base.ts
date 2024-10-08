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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PathwayService } from "../pathway.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PathwayCreateInput } from "./PathwayCreateInput";
import { Pathway } from "./Pathway";
import { PathwayFindManyArgs } from "./PathwayFindManyArgs";
import { PathwayWhereUniqueInput } from "./PathwayWhereUniqueInput";
import { PathwayUpdateInput } from "./PathwayUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PathwayControllerBase {
  constructor(
    protected readonly service: PathwayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pathway })
  @nestAccessControl.UseRoles({
    resource: "Pathway",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPathway(
    @common.Body() data: PathwayCreateInput
  ): Promise<Pathway> {
    return await this.service.createPathway({
      data: data,
      select: {
        createdAt: true,
        description: true,
        difficulty: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Pathway] })
  @ApiNestedQuery(PathwayFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Pathway",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pathways(@common.Req() request: Request): Promise<Pathway[]> {
    const args = plainToClass(PathwayFindManyArgs, request.query);
    return this.service.pathways({
      ...args,
      select: {
        createdAt: true,
        description: true,
        difficulty: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pathway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pathway",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pathway(
    @common.Param() params: PathwayWhereUniqueInput
  ): Promise<Pathway | null> {
    const result = await this.service.pathway({
      where: params,
      select: {
        createdAt: true,
        description: true,
        difficulty: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Pathway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pathway",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePathway(
    @common.Param() params: PathwayWhereUniqueInput,
    @common.Body() data: PathwayUpdateInput
  ): Promise<Pathway | null> {
    try {
      return await this.service.updatePathway({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          difficulty: true,
          id: true,
          title: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Pathway })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Pathway",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePathway(
    @common.Param() params: PathwayWhereUniqueInput
  ): Promise<Pathway | null> {
    try {
      return await this.service.deletePathway({
        where: params,
        select: {
          createdAt: true,
          description: true,
          difficulty: true,
          id: true,
          title: true,
          updatedAt: true,
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
