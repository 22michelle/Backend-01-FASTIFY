import userCtrl from "../controllers/userController.js";

export const userRoutes = (fastify, opts, done) => {
  fastify.get("/", userCtrl.getData);
  fastify.get("/:id", userCtrl.getDataByid);

  fastify.post("/", userCtrl.saveData);
  fastify.put("/:id", userCtrl.actualizar);
  fastify.delete("/:id", userCtrl.eliminar);

  done();
};
