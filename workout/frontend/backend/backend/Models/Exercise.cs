using System;
namespace backend.Models
{
  public class Exercise
  {
    public int ID
    {
      get;
      set;
    }
    public string Text
    {
      get;
      set;
    }
    public int WorkoutID { get; set; }
    public Boolean TrapsCheckBox { get; set; }

  }
}
