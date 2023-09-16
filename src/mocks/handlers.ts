import { rest } from "msw";
import {
  addPlaceMock,
  apiPlacesMock,
  placeIdMock,
  wrongPlaceIdMock,
} from "./placeMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/places`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiPlacesMock));
  }),

  rest.delete(
    `${import.meta.env.VITE_API_URL}/places/${placeIdMock}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ message: "El lugar se ha borrado con éxito" }),
      );
    },
  ),

  rest.post(`${import.meta.env.VITE_API_URL}/places`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ place: addPlaceMock }));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/places`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get places right now"));
  }),

  rest.delete(
    `${import.meta.env.VITE_API_URL}/places/${wrongPlaceIdMock}`,
    (_res, res, ctx) => {
      return res(ctx.status(404, "No se ha podido borrar el lugar"));
    },
  ),

  rest.post(`${import.meta.env.VITE_API_URL}/places`, (_req, res, ctx) => {
    return res(ctx.status(500, "No se ha podido añadir el lugar"));
  }),
];
