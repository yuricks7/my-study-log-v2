import type { RecordType } from "../../@types/RecordType";
import { supabase, supabaseUrl } from "./Supabase/supabaseClient";

// Supabase内のテーブル名
export const TABLE_NAME: string = "my-study-log-v2";

/**
 * Supabaseの操作各種
 */
export const DbUsecase = {
  async fetchList(): Promise<RecordType[]> {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;
    return data;
  },

  async add(title: string, time: number): Promise<RecordType> {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert({ title, time })
      .select();

    if (error) throw error;
    return data[0];
  },

  async update(id: string, title: string, time: number): Promise<RecordType> {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update({ title, time })
      .eq("id", id)
      .select();

    if (error) throw error;
    return data[0];
  },

  async remove(id: string): Promise<string> {
    const { error } = await supabase
      .from(TABLE_NAME)
    .delete()
      .eq("id", id);

    if (error) throw error;
    return id;
  }
};