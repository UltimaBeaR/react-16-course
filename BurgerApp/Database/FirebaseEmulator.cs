using Microsoft.EntityFrameworkCore;

namespace BurgerApp.Database
{
    public class FirebaseEmulator : IFirebase
    {
        public FirebaseEmulator(FirebaseContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Creates new row in specified table and returns id of this row
        /// </summary>
        public string Post(string tableName, string content)
        {
            var newObject = new FirebaseObject()
            {
                ID = System.Guid.NewGuid().ToString(),
                TableName = tableName,
                Content = content
            };

            _context.Objects.Add(newObject);

            _context.SaveChanges();

            return newObject.ID;
        }

        private FirebaseContext _context;

        public class FirebaseContext : DbContext
        {
            public FirebaseContext(DbContextOptions<FirebaseContext> options)
                : base(options)
            {
            }

            public DbSet<FirebaseObject> Objects { get; set; }
        }

        public class FirebaseObject
        {
            public string ID { get; set; }
            public string TableName { get; set; }
            public string Content { get; set; }
        }
    }
}
