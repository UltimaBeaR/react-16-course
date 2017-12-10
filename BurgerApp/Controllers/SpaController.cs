using BurgerApp.Database;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace BurgerApp.Controllers
{
    /// <summary>
    /// This is a replacement for firebase backend http interface used in original burger app course (chapter 10)
    /// </summary>
    public class SpaController: Controller
    {
        public SpaController(IFirebase firebase)
        {
            _firebase = firebase;
        }

        [Route("orders.json")]
        [HttpGet]
        public JsonResult GetOrders()
            => Json(_firebase.Get("orders"));

        [Route("orders.json")]
        [HttpPost]
        public JsonResult PostOrders([FromBody] JObject order)
        {
            var name = _firebase.Post("orders", order);

            return Json(new { name });
        }

        [Route("ingredients.json")]
        [HttpGet]
        public JsonResult GetIngredients()
            => Json(_firebase.Get("ingredients"));

        private IFirebase _firebase;
    }
}
