import React from 'react';
import type { ReactNode } from 'react';
interface ContextState {
    onItemEnter?: (item: string) => void;
    onItemLeave?: () => void;
    expandedItem?: string;
}
export declare const MenuContext: React.Context<ContextState>;
declare const Menu: React.ForwardRefExoticComponent<{
    hoverDelay?: number;
    children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export default Menu;
