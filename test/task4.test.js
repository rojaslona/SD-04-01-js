import { taskArr } from "../src/task4";
import { describe, it, expect } from "vitest";

describe("Task 4" ,() => {
  const arr = taskArr();
  
  it("Debería no contener números duplicados", 
    () =>{
      expect(new Set(arr).size).toBe(arr.length);

    } 
  )
})