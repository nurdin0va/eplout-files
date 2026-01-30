import { Request, Response } from "express"
import { deleteService, getOneService, getService, postService, updateService } from "../services/users.service";

export const  postController= async(req:Request<{},{},{
    email:string,
    avatar:string
}>,res:Response) => {
    try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const avatarPath = req.file ? `/upload/${req.file.filename}` : "";
    const result = await postService({ email: req.body.email, avatar: avatarPath });

    res.status(200).json({ message: "created", data: result });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
export const  getController= async(req:Request,res:Response) => {
 try {
  let result = await getService()
  res.status(201).json({
    message:"All file",
    data:result
  })
 } catch (error:any) {
  res.status(404).json({
   message:error.message,
   
  })
 }
}
export const  getOneController= async(req:Request<{id:string}>,res:Response) => {
 try {
  let id = Number(req.params.id)
  let result = await getOneService(id)
  res.status(200).json({
    message:"getOne",
    data:result
  })
 } catch (error:any) {
  res.status(404).json({
   message:error.message,
  })
 }
}
export const  deleteController= async(req:Request<{id:string}>,res:Response) => {
 try {
   let id = Number(req.params.id)
  let result = await deleteService(id)
  res.status(201).json({
    message:"delete",
    data:result
  })
 } catch (error:any) {
  res.status(404).json({
   message:error.message,
  })
 }
}
export const updateController = async (
  req: Request<{ id: string }, {}, { email: string; avatar?: string }>,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const avatarPath = req.file
      ? `/upload/${req.file.filename}`
      : req.body.avatar || "";

    const result = await updateService(id, {
      email: req.body.email,
      avatar: avatarPath,
    });

    res.status(200).json({
      message: "updated",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
