import pyodbc

conn_str = (
    "Driver={ODBC Driver 17 for SQL Server};"
    "Server=LON001173\\SQLEXPRESS02;"
    "Database=reactwebapp;"
    "Trusted_Connection=yes;"
)

try:
    conn = pyodbc.connect(conn_str)
    print("Database connection successful!")
    conn.close()
except Exception as e:
    print(f"Error: {str(e)}")