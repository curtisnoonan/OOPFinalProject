using System;
namespace backend.Models
{
  public class Workout
  {
    public int ID
    {
      get;
      set;
    }
    public string Title
    {
      get;
      set;
    }
    public string OwnerId { get; set; }
  }
}
