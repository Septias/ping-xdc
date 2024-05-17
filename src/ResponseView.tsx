import { For, type Component } from 'solid-js';
import { PingData } from './App';
import { format } from 'date-fns';
interface ChatProps {
  user: string;
  data: PingData[];
}

const Chats: Component<ChatProps> = ({ user, data }) => {
  return (
    <div style="width: 300px">
      <h1 class="ml-1 font-bold case-capital text-xl"> {user} </h1>
      <div class="border-2 rounded-md p-4 py-1">
        <For each={data}>
          {ping => (
            <div class="flex gap-2">
              <span> <span class="font-bold text-gray-700 tracking-wider">ping</span> #{ping.seq}:</span>
              <span class="text-accent font-bold" style={`color: hsl(${Math.max(124 - ping.delay * 0.1, 0)}, 80%, 50%)`}> {format(ping.delay, "TT")}ms </span>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default Chats;
