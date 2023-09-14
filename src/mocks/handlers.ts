import { rest } from "msw";
import { apiPlacesMock, placeIdMock, wrongPlaceIdMock } from "./placeMock";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/lugares`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiPlacesMock));
  }),
  rest.delete(
    `${import.meta.env.VITE_API_URL}/lugares/${placeIdMock}`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ message: "The place has been successfully removed" }),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_URL}/lugares`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get places right now"));
  }),
  rest.delete(
    `${import.meta.env.VITE_API_URL}/lugares/${wrongPlaceIdMock}`,
    (_res, res, ctx) => {
      return res(ctx.status(404, "Can't remove the place"));
    },
  ),
];
