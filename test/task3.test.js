import { taskArr } from "../src/task3";
import { describe, it, expect } from "vitest";

describe("Task 3" ,() => {
  const arr = taskArr();
  
  it("Debería tener el numero 8 en el indice 7 y un tamaño de 12", 
    () =>{
      expect(arr.indexOf(8)).toBe(7);
      expect(arr.length).toBe(12);
    } 
  )
})