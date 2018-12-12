using Microsoft.EntityFrameworkCore;
using System;
namespace backend
{
  public class BodyPartContext : DbContext
  {
    public BodyPartContext(DbContextOptions<BodyPartContext> options) : base(options) { }

    public DbSet<Models.BodyPart> BodyParts
    {
      get;
      set;
    }
  }
}