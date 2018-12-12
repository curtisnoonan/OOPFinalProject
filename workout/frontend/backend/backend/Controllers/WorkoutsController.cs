using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
  [Route("api/workouts")]
  public class WorkoutsController : Controller
  {
    readonly WorkoutContext context;

    public WorkoutsController(WorkoutContext context)
    {
      this.context = context;
    }

    // GET: api/values
    [Authorize]
    [HttpGet]
    public IEnumerable<Models.Workout> GetWorkouts()
    {
      var userId = HttpContext.User.Claims.First().Value;

      return context.Workout.Where(w => w.OwnerId == userId);
    }

    // POST api/values
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> PostWorkout([FromBody]Models.Workout workout)
    {
      if(!ModelState.IsValid){
        return BadRequest(ModelState);
      }

      var userId = HttpContext.User.Claims.First().Value;

      workout.OwnerId = userId;

      context.Workout.Add(workout);
      await context.SaveChangesAsync();
      return Ok(workout);
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutWorkouts(int id, [FromBody]Models.Workout workout)
    {
      if (id != workout.ID)
      {
        return BadRequest();
      }

      context.Entry(workout).State = EntityState.Modified;

      await context.SaveChangesAsync();

      return Ok(workout);
    }

  }
}