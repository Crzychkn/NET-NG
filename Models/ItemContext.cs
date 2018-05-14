using Microsoft.EntityFrameworkCore;

namespace todolist.Models
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options)
            : base(options)
        {
        }

        public DbSet<Item> Item { get; set; }
    }
}

