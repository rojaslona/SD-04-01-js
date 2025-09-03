import { taskArr } from "../src/task1";
import { describe, it, expect, vi } from "vitest";

describe("Task 1" ,() => {
  const callback = vi.fn();
  const arr = taskArr();
  arr.forEach(callback)
  
  it("Debería tener los números del 1 al 20 en orden", 
    () =>{
      taskArr(callback);
      expect(callback).toBeCalledTimes(20);
      expect(callback).toHaveBeenCalledWith(1,0, arr);
      expect(callback).toHaveBeenCalledWith(2,1, arr);
      expect(callback).toHaveBeenCalledWith(3,2, arr);
      expect(callback).toHaveBeenCalledWith(4,3, arr);
      expect(callback).toHaveBeenCalledWith(5,4, arr);
      expect(callback).toHaveBeenCalledWith(6,5, arr);
      expect(callback).toHaveBeenCalledWith(7,6, arr);
      expect(callback).toHaveBeenCalledWith(8,7, arr);
      expect(callback).toHaveBeenCalledWith(9,8, arr);
      expect(callback).toHaveBeenCalledWith(10,9, arr);
      expect(callback).toHaveBeenCalledWith(11,10,arr);
      expect(callback).toHaveBeenCalledWith(12,11,arr);
      expect(callback).toHaveBeenCalledWith(13,12,arr);
      expect(callback).toHaveBeenCalledWith(14,13,arr);
      expect(callback).toHaveBeenCalledWith(15,14,arr);
      expect(callback).toHaveBeenCalledWith(16,15,arr);
      expect(callback).toHaveBeenCalledWith(17,16,arr);
      expect(callback).toHaveBeenCalledWith(18,17,arr);
      expect(callback).toHaveBeenCalledWith(19,18,arr);
      expect(callback).toHaveBeenCalledWith(20,19,arr);

    } 
  )
})