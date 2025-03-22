using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission11.API.Data;

namespace mission11.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private BookDbContext _bookContext;
        public BookController(BookDbContext temp) 
        {
            _bookContext = temp;
        }

        //[HttpGet]
        //public IActionResult GetProjects(int pageLength = 5, int pageNum = 1)
        //{
        //    HttpContext.Response.Cookies.Append("FavoriteProjectType", "Borehole Well and Hand Pump", new CookieOptions
        //    {
        //        HttpOnly = true,
        //        Secure = true,
        //        SameSite = SameSiteMode.Strict,
        //        Expires = DateTime.Now.AddMinutes(5),
        //    });


        //        var something = _bookContext.Books
        //        .Skip((pageNum -1) * pageLength)
        //        .Take(pageLength)
        //        .ToList();

        //        var totalNumProjects = _bookContext.Books.Count();

        //        var someObject = new
        //        {
        //            Projects = something,
        //            TotalNumProjects = totalNumProjects
        //        };

        //        return Ok(someObject);

        //    }
    }
}
