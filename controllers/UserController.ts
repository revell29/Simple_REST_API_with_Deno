import db from "../config/db.ts";
import { dejs } from "../deps.ts";

const database = db.getDatabase;
const Users = database.collection("users");

interface User {
  email: String;
  fullname: String;
  gender: String;
  age: Number;
  address: String;
}

class UserController {
  static async indexFile(ctx: any): Promise<String> {
    const datas = await Users.find();
    const output = await dejs.renderFileToString(
      `${Deno.cwd()}/resources/views/index.ejs`,
      { datas },
    );
    return ctx.response.body = output;
  }

  static getUser = async ({ response }: { response: any }): Promise<void> => {
    try {
      const dataUser = await Users.find();
      response.status = 200;
      response.body = { data: dataUser };
    } catch (error) {
      response.status = 500;
      response.body = { message: error };
    }
  };

  static addUser = async (request: any, response: any): Promise<void> => {
    try {
      const body = await request.body();
      const { email, fullname, age, gender, address } = body.value;
      const newUser = await Users.insertOne(
        { email, fullname, age, gender, address },
      );

      response.status = 200;
      response.body = { message: "user has been added" };
    } catch (error) {
      response.status = 500;
      response.body = { message: error };
    }
  };

  static showUser = async (
    { params, response }: { params: any; response: any },
  ): Promise<void> => {
    try {
      const id = params.id;
      const detailUser = await Users.findOne({ _id: { $oid: id } });

      response.status = 200;
      response.body = { data: detailUser };
    } catch (error) {
      response.status = 500;
      response.body = { message: error };
    }
  };

  static updateUser = async (
    { params, request, response }: { params: any; request: any; response: any },
  ): Promise<void> => {
    try {
      const id = params.id;
      const body = await request.body();
      const { email, fullname, age, gender, address } = body.value;
      const dataUser = await Users.updateOne(
        { _id: { $oid: id } },
        {
          $set: {
            email: email,
            fullname: fullname,
            age: age,
            gender: gender,
            address: address,
          },
        },
      );

      response.status = 200;
      response.body = { message: "user has beend updated" };
    } catch (error) {
      response.status = 500;
      response.body = { message: error };
    }
  };

  static deletUser = async (
    params: any,
    response: any,
  ): Promise<void> => {
    try {
      const id = params.id;
      await Users.deleteOne({ _id: { $oid: id } });

      response.status = 200;
      response.body = { message: "User has been deleted" };
    } catch (error) {
      response.status = 500;
      response.body = { message: error };
    }
  };
}

export default UserController;
