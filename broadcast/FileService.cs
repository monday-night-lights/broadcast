using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace broadcast
{
	public class FileService
	{
		const string Path = "C:\\Users\\jdrager\\Documents\\GitHub\\broadcast\\data";

		public string ReadString(string file)
		{
			string line = string.Empty;
			try
			{   // Open the text file using a stream reader.
				using (StreamReader sr = new StreamReader(System.IO.Path.Combine(Path, file)))
				{
					// Read the stream to a string, and write the string to the console.
					line = sr.ReadToEnd();
				}
			}
			catch (IOException e)
			{
				Console.WriteLine(@"The file could not be read:");
				Console.WriteLine(e.Message);
			}

			return line;
		}

		public int ReadInt(string file)
		{
			string line = string.Empty;
			try
			{   // Open the text file using a stream reader.
				using (StreamReader sr = new StreamReader(System.IO.Path.Combine(Path, file)))
				{
					// Read the stream to a string, and write the string to the console.
					line = sr.ReadToEnd();
				}
			}
			catch (IOException e)
			{
				Console.WriteLine(@"The file could not be read:");
				Console.WriteLine(e.Message);
			}
			int result = 0;
			int.TryParse(line, out result);

			return result;
		}

		public void Write(string file, object text)
		{
			File.WriteAllText(System.IO.Path.Combine(Path, file), text.ToString());
		}
	}
}
