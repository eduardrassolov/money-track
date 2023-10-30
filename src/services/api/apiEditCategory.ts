import supabase from "../supabase";

async function apiEditCategory({ id, newName }) {
  try {
    const { data, error } = await supabase.from("Category").update({ name: newName }).eq("id", id).select();
    if (error) {
      throw new Error(error.code);
    }
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export default apiEditCategory;
