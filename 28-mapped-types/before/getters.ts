interface Info {
  name: string;
}

interface LazyInfo {
  getName: () => string;
};

// type LazyInfo = Getters<Info>;
