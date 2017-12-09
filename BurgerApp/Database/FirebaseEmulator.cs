using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace BurgerApp.Database
{
    public class FirebaseEmulator : IFirebase
    {
        public FirebaseEmulator(FirebaseContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Creates new row in specified table and returns id(name) of this row
        /// </summary>
        public string Post(string tableName, JToken value)
            => _context.AddNewObject(tableName, value);

        /// <summary>
        /// Gets all rows of specified table
        /// </summary>
        public JObject Get(string tableName)
            => _context.GetObjectsFromTable(tableName);

        private FirebaseContext _context;

        public class FirebaseContext : DbContext
        {
            public FirebaseContext(DbContextOptions<FirebaseContext> options)
                : base(options)
            {
            }

            public DbSet<FirebaseObject> Objects { get; set; }

            public void Initialize()
            {
                // Create database schema if there is no existing database found
                Database.EnsureCreated();

                // Fill initial data

                const string ingredientsTable = "ingredients";

                if (GetObjectsQueryFromTable(ingredientsTable).CountAsync().Result == 0)
                {
                    AddNewObject(ingredientsTable, new JValue(0), "salad");
                    AddNewObject(ingredientsTable, new JValue(0), "bacon");
                    AddNewObject(ingredientsTable, new JValue(0), "cheese");
                    AddNewObject(ingredientsTable, new JValue(0), "meat");
                }
            }

            public string AddNewObject(string tableName, JToken value, string name = null)
            {
                var newObject = new FirebaseObject()
                {
                    ID = name ?? System.Guid.NewGuid().ToString(),
                    TableName = tableName,
                    Value = value.ToString()
                };

                Objects.Add(newObject);

                SaveChanges();

                return newObject.ID;
            }

            public JObject GetObjectsFromTable(string tableName)
            {
                var result = new JObject();

                foreach (var obj in GetObjectsQueryFromTable(tableName).ToArrayAsync().Result)
                    result.Add(obj.ID, JToken.Parse(obj.Value));

                return result;
            }

            public IQueryable<FirebaseObject> GetObjectsQueryFromTable(string tableName)
                => Objects.Where(x => x.TableName == tableName);
        }

        public class FirebaseObject
        {
            public string ID { get; set; }
            public string TableName { get; set; }
            public string Value { get; set; }
        }
    }
}
