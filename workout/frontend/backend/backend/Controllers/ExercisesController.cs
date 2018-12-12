using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
 
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
  [Route("api/Exercises")]
  public class ExercisesController : Controller
  {
    readonly WorkoutContext context;
    //readonly BodyPartContext contextTwo;

    public ExercisesController(WorkoutContext context)
    {
      this.context = context;
    }

    /**public ExercisesController(BodyPartContext contextTwo)
    {
      this.contextTwo = contextTwo;
    }*/

    // GET: api/values
    [HttpGet]
    public IEnumerable<Models.Exercise> Get()
    {
      return context.Exercises;  
    }

    // GET: api/values
    [HttpGet("{workoutID}")]
    public IEnumerable<Models.Exercise> Get([FromRoute] int workoutID)
    {
      return context.Exercises.Where(w => w.WorkoutID == workoutID);
    }

    // POST api/values
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Models.Exercise exercise)
    {
      var workout = context.Workout.SingleOrDefault(w => w.ID == exercise.WorkoutID);

      if (workout == null)
        return NotFound();

      context.Exercises.Add(exercise); 
      await context.SaveChangesAsync();
      return Ok(exercise);
    }
    // POST api/values

/**    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Models.BodyPart bodyPart)
    {
      var bodyParts = contextTwo.BodyParts.SingleOrDefault(w => w.BodyPartTraps == 0);

      if (bodyParts == null)
        return NotFound();

      contextTwo.BodyParts.Add(bodyPart);
      await contextTwo.SaveChangesAsync();
      return Ok(bodyPart);
    }*/

    // PUT api/values/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody]Models.Exercise exercise)
    {
      if(id != exercise.ID){
        return BadRequest();
      }

      context.Entry(exercise).State = EntityState.Modified;

      await context.SaveChangesAsync();

      return Ok(exercise);
    }

  }
}
