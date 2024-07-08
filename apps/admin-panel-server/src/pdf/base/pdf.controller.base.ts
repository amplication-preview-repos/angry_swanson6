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
import { PdfService } from "../pdf.service";
import { PdfCreateInput } from "./PdfCreateInput";
import { Pdf } from "./Pdf";
import { PdfFindManyArgs } from "./PdfFindManyArgs";
import { PdfWhereUniqueInput } from "./PdfWhereUniqueInput";
import { PdfUpdateInput } from "./PdfUpdateInput";

export class PdfControllerBase {
  constructor(protected readonly service: PdfService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Pdf })
  async createPdf(@common.Body() data: PdfCreateInput): Promise<Pdf> {
    return await this.service.createPdf({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        uploadedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Pdf] })
  @ApiNestedQuery(PdfFindManyArgs)
  async pdfs(@common.Req() request: Request): Promise<Pdf[]> {
    const args = plainToClass(PdfFindManyArgs, request.query);
    return this.service.pdfs({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        uploadedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pdf(@common.Param() params: PdfWhereUniqueInput): Promise<Pdf | null> {
    const result = await this.service.pdf({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        uploadedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePdf(
    @common.Param() params: PdfWhereUniqueInput,
    @common.Body() data: PdfUpdateInput
  ): Promise<Pdf | null> {
    try {
      return await this.service.updatePdf({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          uploadedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Pdf })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePdf(
    @common.Param() params: PdfWhereUniqueInput
  ): Promise<Pdf | null> {
    try {
      return await this.service.deletePdf({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          description: true,
          uploadedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },
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
