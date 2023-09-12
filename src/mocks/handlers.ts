import { rest } from "msw";
import { apiPlacesMock } from "./placeMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/lugares`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiPlacesMock));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/lugares`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get places right now"));
  }),
];
