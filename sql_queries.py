def manyArgs(*arg):
	print "I was called with", len(arg), "arguments: ", arg

manyArgs(1)
manyArgs(1,2,3)
