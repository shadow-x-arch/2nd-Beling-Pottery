import { Cross as Progress, Link2, MessageCircle } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Low";
  type: string;
  progress: number;
  comments: number;
  links: number;
  assignees: string[];
  image: string;
}

function TaskCard({
  id,
  title,
  description,
  priority,
  type,
  progress,
  comments,
  links,
  assignees,
  image,
}: TaskCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-900">
      
      <div className="flex justify-between items-start mb-2 ">
        <div className="flex items-center gap-1">
          <span
            className={`text-xs px-2 py-0.5 rounded ${
              priority === "High"
                ? "bg-red-50 text-red-600 dark:bg-red-800 dark:text-red-300"
                : "bg-gray-50 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
            }`}
          >
            {priority}
          </span>
          <span className="text-xs text-white bg-blue-500 dark:bg-blue-700 px-2 py-0.5 rounded">
            {type}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{id}</span>
      </div>

     
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

     
      <h4 className="text-gray-900 dark:text-gray-300 font-medium mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {description}
      </p>

     
      <div className="mb-4 ">
        <div className="flex items-center gap-2 mb-1">
          <Progress className="w-4 h-4 text-gray-400 dark:text-gray-600" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Progress
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-auto ">
            {progress}%
          </span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
          <div
            className="h-full bg-blue-600 dark:bg-blue-800 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

     
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {assignees.map((assignee, i) => (
            <img
              key={i}
              src={assignee || "https://via.placeholder.com/40"}
              alt={`Assignee ${i + 1}`}
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
            />
          ))}
        </div>

        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Link2 className="w-4 h-4" />
            <span className="text-sm">{links}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
