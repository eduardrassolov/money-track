import supabase from "../supabase";

interface IApiEditCategory {
  id: string;
  newName: string;
}

async function apiEditCategory({ id, newName }: IApiEditCategory) {
  try {
    const { data, error } = await supabase.from("Category").update({ name: newName }).eq("id", id).select();

    if (error) {
      throw new Error(error.code);
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export default apiEditCategory;
