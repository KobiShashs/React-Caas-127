import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CatUploadModel from "../../../Models/CatUploadModel";
import notify, { SccMsg } from "../../../Service/Notification";
import "./AddCat.css";

function AddCat(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CatUploadModel>({
    mode: "onTouched",
  });

  const history = useHistory();

  async function send(cat: CatUploadModel) {
    try{
      const formData = new FormData();
      formData.append("name", cat.name);
      formData.append("weight", cat.weight.toString());
      formData.append("color", cat.color);
      formData.append("birthday", cat.birthday.toString());
      formData.append("image",cat.image.item(0));
      const response = await axios.post<CatUploadModel>(
        "http://localhost:8080/api/cats",
        formData
      );
      console.log(response.data);
      notify.success(SccMsg.ADDED_CAT)
      history.push("/cats");
  
      console.log(cat);
    }
    catch(err){
      notify.error(err);
    }
  }
  return (
    <div className="AddCat">
      <h2>Add new Cat</h2>
      <form onSubmit={handleSubmit(send)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 9 })}
        />
        <br />
        {errors.name?.type === "required" && <span>missing name</span>}
        {errors.name?.type === "maxLength" && (
          <span>name is up to 9 characters</span>
        )}
        <br />
        <input
          type="number"
          step="0.01"
          placeholder="Weight"
          {...register("weight", {
            required: { value: true, message: "Weight is missing" },
            max: { value: 100, message: "Weight maximum value is 100" },
            min: { value: 0, message: "Weight minimum value is 0" },
          })}
        />
        <br />
        <span>{errors.weight?.message}</span>
        <br />
        <input
          type="text"
          placeholder="Color"
          {...register("color", {
            required: { value: true, message: "Color is missing" },
          })}
        />
        <br />
        <span>{errors.color?.message}</span>
        <br />
        <input
          type="date"
          placeholder="Birthday"
          {...register("birthday", {
            required: { value: true, message: "Birthday is missing" },
          })}
        />
        <br />
        <span>{errors.birthday?.message}</span>
        <br />
        <input
          type="file"
          placeholder="Image"
          {...register("image", {
            required: { value: true, message: "Image is missing" },
          })}
        />
        <br />
        <span>{errors.image?.message}</span>
        <br />
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}

export default AddCat;
