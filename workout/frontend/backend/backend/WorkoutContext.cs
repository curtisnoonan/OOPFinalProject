using Microsoft.EntityFrameworkCore;
using System;
namespace backend
{
  public class WorkoutContext : DbContext
  {
    public WorkoutContext(DbContextOptions<WorkoutContext> options) : base(options) { }

    public DbSet<Models.Exercise> Exercises
    {
      get;
      set;
    }
    public DbSet<Models.Workout> Workout
    {
      get;
      set;
    }
  }
}
