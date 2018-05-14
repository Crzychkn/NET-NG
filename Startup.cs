using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TodoApi.Models;

namespace TodoApi
{
    public class Startup
    {       
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TodoContext>(opt => 
                opt.UseInMemoryDatabase("TodoList"));
            services.AddMvc();


            services.AddCors(options =>
            {

                  options.AddPolicy("AllowAllOrigins",
                        builder =>
                        {
                        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                        }); 

                  });
        }

        public void Configure(IApplicationBuilder app)
        {
           app.UseCors("AllowAllOrigins");
           app.UseDefaultFiles();
           app.UseStaticFiles();
           app.UseMvc();
        }
    }
}
