import { Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/list");

usersRoutes.post("/", createUserController.handle);

usersRoutes.put("/", updateUserController.handle);

usersRoutes.put("/update_password", updateUserPasswordController.handle);

usersRoutes.get("/profile", listUserController.handle);

usersRoutes.post("/forgot_password", sendForgotPasswordMailController.handle);

usersRoutes.post("/reset_password/:token", resetPasswordController.handle);

usersRoutes.get("/cria-usuarios", createMultipleUsersController.handle);

usersRoutes.get(
  "/login-trocapontos",

  loginTrocaPontosController.handle
);

export { usersRoutes };
