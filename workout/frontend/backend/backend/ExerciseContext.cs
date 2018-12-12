using Microsoft.EntityFrameworkCore;
using System;
namespace backend
{
  public class ExerciseContext : DbContext
  {
    public ExerciseContext(DbContextOptions<ExerciseContext> options) : base (options){}

    public DbSet<Models.Exercise> Exercises
    {
      get;
      set;
    }
  }
}
